import express from 'express';
import { School } from '../types/school';

const router = express.Router();

const data: School[] = [
  {
    id: 1,
    name: '동북고',
  },
];

router.get('/', (req, res) => res.status(200).json(data));

// 개별 학교를 불러오기 위한
router.get('/:schoolId', (req, res) => {
  const { schoolId } = req.params;
  if (!schoolId) {
    return res.status(400).json();
  }

  // 학교 아이디를 10진수형태로 바꿔줘
  const schoolIdNumber = parseInt(schoolId, 10);

  if (!data.some(({ id }) => id === schoolIdNumber)) {
    return res.status(404).json();
  }

  //
  const filtered = data.filter((item) => item.id === schoolIdNumber);
  return res.status(200).json(filtered[0]);
});

router.post('/', (req, res) => {
  const school: School = req.body as School;

  if (!school) {
    return res.status(400).json();
  }

  data.push(school);
  return res.status(201).json();
});

export default router;
