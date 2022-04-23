import express from 'express';
// import groupByTime from 'group-by-time';
import { sequelize } from './models/index';
import { Seller } from './models/seller';
import { Transaction } from './models/transaction';


const app = express();
app.use(express.json());

app.get('/transactions', async(req, res) => {
  try {
    let page = req.query.page;
    let per_page = req.query.per_page; //size
    let seller_id = req.query.seller_id;
    let date_range = req.query.date_range;

    let transaction = Transaction;
    const transactions = await transaction.findAll({where: {seller_id: seller_id}, limit: per_page, offset: date_range});

    return res.json(transactions)
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: 'something went wrong'});
  }
});

app.get('/sellers/transactions-summary', async(req, res) => {
  try {
    let seller_id = req.query.seller_id;
    let date_range = req.query.date_range;

    let sellers = Seller;
    let transaction = Transaction;

    const sellerdata = await sellers.findAll({where: {id: seller_id}});
    const sellerTransactions = await transaction.findAll({where: {id: seller_id}});

    // calculate sellers income

    return res.json(sellerdata)
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: 'something went wrong'});
  }
})


app.listen({port: 5000}, async () => {
  console.log("server up on port 5000");
  // await sequelize.sync();
  await sequelize.authenticate()
  //sequelize db:migrate
  console.log("Database is connected");
});