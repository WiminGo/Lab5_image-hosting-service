import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Image Hosting API is running' })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})