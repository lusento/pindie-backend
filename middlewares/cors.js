// Список сайтов, которым мы разрешаем обращаться к серверу
const allowedCors = [
  "https://frontend-kanteyki.nomoredomainswork.ru",
  "https://backend-kanteyki.nomoredomainswork.ru",
  "http://localhost:3000",
  "http://localhost:3001",
];

// Функция, которая принимает объекты req (информация о запросе),
// res (объект ответа) и функцию next (для запуска следующего миддлвара)
function cors(req, res, next) {
  const { origin } = req.headers; // Смотрим, кто стучится к серверу
  if (allowedCors.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization"
  );
  next();
}


module.exports = cors;
