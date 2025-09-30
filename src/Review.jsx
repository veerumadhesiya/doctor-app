import React, { useEffect, useState } from "react";
import axios from "axios";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
      .then((res) => {
        setReviews(res.data.data || []); // API returns reviews in data        
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching reviews:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-600">Loading reviews...</div>
    );
  }

  return (
    <div className=" py-12 bg-sky-400/5 ">
      <div className="max-w-6xl mx-auto px-6 ">
        <h2 className="text-4xl font-bold text-[#003B79] text-center mb-8">
          What Our Customers Say
        </h2>

        {/* Responsive grid */}
        <div className="border-amber-500 grid md:grid-cols-2 gap-8 mt-25 ">
          {reviews.slice(0, 2).map((review) => (
            <div
              key={review.ID}
              className="p-6 rounded-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 right-4 bg-blue-500  w-8 h-8 flex items-center justify-center rounded-full text-lg">
                &quot;
              </div>

              {/* Review Text */}
              <p className="text-gray-600 mb-4">{review.Reviews}</p>

              {/* User Info */}
              <div className="flex items-center mt-4">
                <img
                  src={review.ProfilePic || "https://via.placeholder.com/50"}
                  alt={review.Name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold text-gray-800">{review.Name}</p>
                  <p className="text-sm text-gray-500">Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
