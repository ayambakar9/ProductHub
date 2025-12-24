// src/components/admin/DataTable.jsx
import { useState } from 'react';

export default function DataTable() {
  // Syarat: Gunakan dummy data (hardcode array) dalam useState
  const [products] = useState([
    { id: "1", name: "iPhone 15 Pro", category: "Smartphone", price: 18999000 },
    { id: "2", name: "MacBook Air M3", category: "Laptop", price: 17499000 },
  ]);

  const handleHapus = (name) => {
    // Syarat Checkpoint 1: Event handling log ke console
    console.log("LOG: Menghapus produk " + name);
  };

  return (
    <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
      <thead>
        <tr style={{ backgroundColor: '#ddd' }}>
          <th style={{ padding: '10px' }}>Nama</th>
          <th style={{ padding: '10px' }}>Kategori</th>
          <th style={{ padding: '10px' }}>Harga</th>
          <th style={{ padding: '10px' }}>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item) => (
          <tr key={item.id}>
            <td style={{ padding: '10px' }}>{item.name}</td>
            <td style={{ padding: '10px' }}>{item.category}</td>
            <td style={{ padding: '10px' }}>Rp {item.price.toLocaleString()}</td>
            <td style={{ padding: '10px' }}>
              <button onClick={() => handleHapus(item.name)} style={{ color: 'red', cursor: 'pointer' }}>
                Hapus
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}