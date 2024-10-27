import React, { useState, useEffect } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";
import { db } from "../db";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

function Catego(prop){
  const {tok} = prop
    const {cate} = useParams()
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const cloudName = "dvazqyb3u"; // اسم السحابة
    const apiKey = "324886912419667"; // مفتاح API
    const apiSecret = "QKVF4HQE9BgxS5QrxY4gvzqhXfQ"; // السر
    const timestamp = Math.floor(Date.now() / 1000);
    const publicId = `your_public_id_${timestamp}`; // يمكنك تحديد الـ public_id كما تريد

    // إنشاء توقيع
    const signature = CryptoJS.SHA1(
      `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`
    ).toString();

    // إعداد البيانات للإرسال
    const formData = new FormData();
    formData.append("file", file);
    formData.append("api_key", apiKey);
    formData.append("timestamp", timestamp);
    formData.append("public_id", publicId);
    formData.append("signature", signature);

    try {
      // رفع الصورة إلى Cloudinary
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );
      const imgUrl = response.data.secure_url; // الحصول على رابط الصورة
      const publicId = response.data.public_id; // الحصول على الـ public ID

      // تخزين الرابط في Firestore
      const docRef = await addDoc(collection(db , cate), {
        url: imgUrl,
        publicId: publicId,
      });
      setImages([
        { id: docRef.id, url: imgUrl, publicId: publicId },
        ...images,
      ]);
      setMessage("تم رفع الصورة بنجاح!");
    } catch (error) {
      console.error("خطأ في رفع الصورة:", error.response.data);
      setMessage("حدث خطأ أثناء رفع الصورة.");
    }
  };

  useEffect(() => {
    const fetchImages = async () => {
      const snapshot = await getDocs(collection(db,cate));
      const imageData = snapshot.docs.reverse().map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setImages(imageData);
      setLoading(false)
    };

    fetchImages();
  }, []);

  const handleDelete = async (id) => {
    try {
      // حذف الرابط من Firestore
      const imageRef = doc(db, cate, id);
      await deleteDoc(imageRef);

      setMessage("تم حذف الصورة بنجاح!");

      // تحديث قائمة الصور بعد الحذف
      setImages(images.filter((image) => image.id !== id));
    } catch (error) {
      console.error("خطأ في حذف الصورة:", error);
      setMessage("حدث خطأ أثناء حذف الصورة.");
    }
  };



  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (url) => {
      setSelectedImage(url);
  };

  const closeImage = () => {
      setSelectedImage(null);
  };
  
  return (
    <div className="catego">
      <Helmet>
        <title>{cate}</title>
      </Helmet>
      <div className="container text-center mt-5">
      {tok && <>
        <input
          type="file"
          className="form-control mb-3"
          onChange={handleFileChange}
        />
        <button className="btn btn-primary" onClick={handleUpload}>
          رفع الصورة
        </button>
        {message && <p className="mt-3 text-success">{message}</p>}
        </>}
      <div className="row">
                {loading?<i className="fa-solid fa-spinner mt-5 fa-spin"></i>: images.reverse().map(({ id, url }) => (
                    <div data-aos="flip-left" key={id} className="col-12 col-md-4 my-4">
                        <div className="card border-0">
                            <img
                                src={url}
                                alt="Uploaded"
                                className="card-img-top "
                                style={{  maxHeight:"500px",objectFit: 'cover' }}
                                onClick={() => handleImageClick(url)}
                            />
{tok && 
                              <div className="card-body text-center">
                                  <button
                                      className="btn btn-danger"
                                      onClick={() => handleDelete(id)}
                                  >
                                      حذف
                                  </button>
                              </div>
                            }
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="modal" onClick={closeImage} style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1000
                }}>
                    <img src={selectedImage} alt="Large" style={{ maxWidth: '90%', maxHeight: '90%' }} />
                </div>
            )}
      </div>
    </div>
  );
}

export default Catego;
