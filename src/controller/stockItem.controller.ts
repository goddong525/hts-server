import express from 'express';
import { getStockItems } from '../service/stockItem.service';
import { CurrentStockPrice } from '../types/stock';

const router = express.Router();
router.get('/', async (req, res) => {
  const items: CurrentStockPrice[] = await getStockItems();
  return res.status(200).json(items);
});

export default router;
