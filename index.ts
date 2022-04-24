import express from 'express';
import { QueryTypes } from 'sequelize';
import { sequelize } from './models';
import  { Seller } from './models/seller';
import  { Transaction }  from "./models/transaction";

const app = express();
app.use(express.json());

app.get('/transactions', async(req, res) => {
  try {
    let page = req.query.page;
    let per_page = req.query.per_page;
    let seller_id = req.query.seller_id;
    let date_range = req.query.date_range;

    let transaction = Transaction;
    const transactions = await transaction.findAndCountAll({
      where: {
        seller_id: seller_id
        },
        offset: Number(page) * Number(per_page),
        limit: per_page
      });

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

    let seller = Seller
    const sellerdata = await seller.findOne({ where: { id: seller_id } });
    const sellertotalprices = await sequelize
    .query("select CAST(lastupdated AS DATE) as Date, sum(price) from transaction where seller_id = ? group by CAST(lastupdated AS DATE) LIMIT ?"
      ,{ 
        replacements: [seller_id, Number(date_range)],
        type: QueryTypes.SELECT
      });

    return res.json({sellerdata, sellertotalprices})
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: 'something went wrong'});
  }
})


app.listen({port: 5000}, async () => {
  console.log("server up on port 5000");
  //first time only to sync the DB
  // await sequelize.sync();   
  //The normal use to connect DB
    await sequelize.authenticate();
  //to inform migration
  //await sequelize db:migrate
  console.log("Database is connected");
});