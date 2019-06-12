
let prodList = { items: [] }
let lista = prodList.items;

exports.get = (req, res, next) => {
    res.end('Produto recuperado com sucesso!');
};

exports.getById = (req, res, next) => {
    res.end('Produto recuperado com sucesso!');
};

exports.post = (req, res, next) => {
    res.end('Produto criado com sucesso!');
};

exports.put = (req, res, next) => {
    res.end('Produto atualizado com sucesso!');
};

exports.delete = (req, res, next) => {
    res.end('Produto deletado com sucesso!');
};