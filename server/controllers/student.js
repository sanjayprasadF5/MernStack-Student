export const getStudent = async (req, res) => {
  try {
    const allstudent = await student.find();
    res.sendStatus(200).json(allstudent);
  } catch (error) {
    res.sendStatus(404).json({ message: error.message });
  }
};

export const createStudent = async (req, res) => {
  const student = req.body;
  const newStudent = new student(student);

  try {
    await newStudent.save();
    res.sendStatus(201).json(newStudent);
  } catch (error) {
    res.sendStatus(404).json({ message: error.message });
  }
};
