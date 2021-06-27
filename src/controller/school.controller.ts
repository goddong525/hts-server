import express from 'express';
import { School } from '../types/school';
import SchoolModel from '../model/school.model';

const router = express.Router();

router.get('/', async (req, res) => {
  const schools: SchoolModel[] = await SchoolModel.findAll();
  return res.status(200).json(schools);
});

// 개별 학교를 불러오기 위한
router.get('/:schoolId', async (req, res) => {
  const { schoolId } = req.params;

  // 학교 아이디를 10진수형태로 바꿔줘
  const schoolIdNumber: number = parseInt(schoolId, 10);
  const school: SchoolModel | null = await SchoolModel.findByPk(schoolIdNumber);
  if (!school) {
    return res.status(404).json();
  }
  return res.status(200).json(school);
});

router.post('/', (req, res) => {
  const school: School = req.body as School;

  if (!school) {
    return res.status(400).json();
  }

  SchoolModel.create({ name: school.name });

  return res.status(201).json();
});

export default router;
