// src/App.jsx
import { useState } from 'react';

// --- KOMPONEN HEADER ---
function AdminHeader() {
  return (
    <div style={{ padding: '20px', borderBottom: '2px solid #333', marginBottom: '20px' }}>
      <h1>Product Hub - Dashboard Admin</h1>
      <p>Checkpoint 1: Fondasi & Arsitektur Komponen</p>
    </div>
  );
}

// --- KOMPONEN FORM ---
function FormData() {
  const simpan = (e) => {
    e.preventDefault();
    // Syarat Checkpoint 1: Log ke console
    console.log("LOG: Tombol simpan diklik!"); 
    alert("Berhasil! Cek Console browser untuk melihat log.");
  };
  return (
    <div style={{ padding: '15px', background: '#f0f0f0', borderRadius: '8px', marginBottom: '20px' }}>
      <h3>Tambah Produk</h3>
      <form onSubmit={simpan}>
        <input type="text" placeholder="Nama Produk" style={{ padding: '8px', marginRight: '10px' }} />
        <button type="submit" style={{ padding: '8px', cursor: 'pointer', backgroundColor: '#000', color: '#fff' }}>
          Simpan ke Console
        </button>
      </form>
    </div>
  );
}

// --- KOMPONEN TABEL ---
function DataTable() {
  // Menggunakan useState agar data bisa berubah (Dihapus)
  const [data, setData] = useState([
    { id: 1, nama: "iPhone 15 Pro", harga: "Rp 20.000.000" },
    { id: 2, nama: "MacBook Air M3", harga: "Rp 18.000.000" },
    { id: 3, nama: "Sony WH-1000XM5", harga: "Rp 5.999.000" } // Contoh data dari panduan
  ]);

  const handleHapus = (id, nama) => {
    // 1. Syarat Checkpoint 1: Muncul di Console
    console.log("LOG: Menghapus produk " + nama + " (ID: " + id + ")");
    
    // 2. Logika Menghapus: Filter data yang ID-nya tidak sama dengan yang diklik
    const dataTerbaru = data.filter(item => item.id !== id);
    
    // 3. Update tampilan tabel
    setData(dataTerbaru);
    
    alert("Produk " + nama + " telah dihapus dari tampilan!");
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Daftar Produk (Data Statis)</h3>
      <table border="1" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead style={{ backgroundColor: '#eee' }}>
          <tr>
            <th style={{ padding: '10px' }}>ID</th>
            <th style={{ padding: '10px' }}>Nama Produk</th>
            <th style={{ padding: '10px' }}>Harga</th>
            <th style={{ padding: '10px' }}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((p) => (
              <tr key={p.id}>
                <td style={{ padding: '10px' }}>{p.id}</td>
                <td style={{ padding: '10px' }}>{p.nama}</td>
                <td style={{ padding: '10px' }}>{p.harga}</td>
                <td style={{ padding: '10px' }}>
                  <button 
                    onClick={() => handleHapus(p.id, p.nama)} 
                    style={{ color: 'red', cursor: 'pointer', padding: '5px' }}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center', padding: '20px' }}>Data Kosong</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

// --- HALAMAN UTAMA ---
export default function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <AdminHeader />
      <FormData />
      <DataTable />
    </div>
  );
}