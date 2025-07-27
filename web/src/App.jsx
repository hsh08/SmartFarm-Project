import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [sensorData, setSensorData] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ 서버에서 센서 데이터 가져오기 (GET)
  useEffect(() => {
    axios
      .get("http://localhost:3000/sensor-data") // Express 서버 API
      .then((res) => {
        setSensorData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API 요청 오류:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">🌱 스마트팜 센서 데이터</h1>

      {loading ? (
        <p>📡 데이터를 불러오는 중...</p>
      ) : (
        <table className="border-collapse border border-gray-400 w-full">
          <thead>
            <tr>
              <th className="border border-gray-400 p-2">ID</th>
              <th className="border border-gray-400 p-2">온도(°C)</th>
              <th className="border border-gray-400 p-2">습도(%)</th>
              <th className="border border-gray-400 p-2">시간</th>
            </tr>
          </thead>
          <tbody>
            {sensorData.map((row) => (
              <tr key={row.id}>
                <td className="border border-gray-400 p-2">{row.id}</td>
                <td className="border border-gray-400 p-2">{row.temperature}</td>
                <td className="border border-gray-400 p-2">{row.humidity}</td>
                <td className="border border-gray-400 p-2">{row.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}