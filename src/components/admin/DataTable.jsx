export default function DataTable() {
  // Syarat Checkpoint 1: Gunakan data dummy (hardcode array)
  const dataProduk = [
    { id: 1, name: "iPhone 15 Pro", price: 20000000 },
    { id: 2, name: "MacBook Air M3", price: 18000000 }
  ];

  const handleHapus = (name) => {
    // Syarat Checkpoint 1: Event handling log ke console
    console.log("Menghapus produk: " + name);
  };

  return (
    <table border="1" width="100%" style={{ textAlign: 'left' }}>
      <thead>
        <tr>
          <th>Nama Produk</th>
          <th>Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {dataProduk.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>Rp {item.price.toLocaleString()}</td>
            <td>
              <button onClick={() => handleHapus(item.name)}>Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}