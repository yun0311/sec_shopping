export default function handler(req, res) {
  res.status(200).json({
    message: "Vercel API 연결 성공!",
    time: new Date()
  });
}