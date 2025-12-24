// src/components/admin/FormData.jsx
export default function FormData() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Syarat Checkpoint 1: Event handling log ke console
    console.log("LOG: Tombol Tambah Produk diklik!");
    alert("Data berhasil diproses (Lihat Console)");
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px', marginBottom: '20px' }}>
      <h3>Tambah Produk Baru (iPhone/Mac)</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
        <input type="text" placeholder="Nama Produk" style={{ padding: '8px' }} required />
        <input type="number" placeholder="Harga" style={{ padding: '8px' }} required />
        <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: '#000', color: '#fff' }}>
          Tambah ke Log
        </button>
      </form>
    </div>
  );
}