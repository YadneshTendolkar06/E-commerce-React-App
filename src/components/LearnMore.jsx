import React from "react";

function LearnMore() {
  return (
    <section className="bg-white py-12 px-6 md:py-16 md:px-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Why Choose <span className="text-blue-500">ShopEasy?</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          At ShopEasy, we aim to deliver the best online shopping experience with amazing deals, fast delivery, and 24/7 support.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Top Quality Products</h3>
            <p className="mt-2 text-gray-600">
              We offer a wide range of high-quality products sourced from trusted suppliers.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Fast Delivery</h3>
            <p className="mt-2 text-gray-600">
              Get your orders delivered quickly and safely to your doorstep.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Customer Support</h3>
            <p className="mt-2 text-gray-600">
              Our team is here 24/7 to assist you with your queries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearnMore;
