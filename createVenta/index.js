module.exports = function (context, req) {  
    context.bindings.cosmosDBMessage = req.body;
    context.bindings.signalRMessages = [{
        "target": "ventaCreated",
        "arguments": [req.body]
    }];
    context.done();
};