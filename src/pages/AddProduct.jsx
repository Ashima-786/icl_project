import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    description: "",
    image: "",
    material: "",
    recyclable: "",
    carbonLevel: "",
  });

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔥 Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          price: Number(formData.price), // convert price
          // ❌ removed score (backend calculates it)
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      const data = await response.json();
      console.log("Product added:", data);

      // ✅ Redirect to marketplace
      navigate("/marketplace");

    } catch (error) {
      console.error("Error:", error);
      alert("Error adding product");
    }
  };

  return (
    <div className="add-product">
      <h2>Add New Product</h2>

      <form onSubmit={handleSubmit}>
        {/* Product Name */}
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          onChange={handleChange}
          required
        />

        {/* Brand */}
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          onChange={handleChange}
          required
        />

        {/* Price */}
        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          required
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        {/* Image */}
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />

        {/* 🔥 Material */}
        <select name="material" onChange={handleChange} required>
          <option value="">Select Material</option>
          <option value="Organic">Organic</option>
          <option value="Recycled">Recycled</option>
          <option value="Synthetic">Synthetic</option>
        </select>

        {/* 🔥 Recyclable */}
        <select name="recyclable" onChange={handleChange} required>
          <option value="">Recyclable?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        {/* 🔥 Carbon Footprint */}
        <select name="carbonLevel" onChange={handleChange} required>
          <option value="">Carbon Footprint</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        {/* Submit */}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;