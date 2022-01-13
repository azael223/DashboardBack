module.exports = function (context, req, ventas) {
    context.res.body = ventas;
    context.done();
  };
  