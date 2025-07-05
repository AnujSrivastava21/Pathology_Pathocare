import express from 'express'
import cors from 'cors'
import XLSX from 'xlsx'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = 3001

// Middleware
app.use(cors())
app.use(express.json())

// Excel file path
const EXCEL_FILE_PATH = path.join(__dirname, 'bookings.xlsx')

// Initialize Excel file if it doesn't exist
function initializeExcelFile() {
  if (!fs.existsSync(EXCEL_FILE_PATH)) {
    const workbook = XLSX.utils.book_new()
    const headers = [
      'Booking ID',
      'Name',
      'Age',
      'Gender',
      'Test Name',
      'Timing',
      'Phone',
      'Email',
      'Booking Date'
    ]
    const worksheet = XLSX.utils.aoa_to_sheet([headers])
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Bookings')
    XLSX.writeFile(workbook, EXCEL_FILE_PATH)
    console.log('Excel file created successfully')
  }
}

// Read existing bookings
function readBookings() {
  try {
    const workbook = XLSX.readFile(EXCEL_FILE_PATH)
    const worksheet = workbook.Sheets['Bookings']
    const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 })
    return data.slice(1) // Remove headers
  } catch (error) {
    console.error('Error reading Excel file:', error)
    return []
  }
}

// Write bookings to Excel
function writeBookings(bookings) {
  try {
    const workbook = XLSX.utils.book_new()
    const headers = [
      'Booking ID',
      'Name',
      'Age',
      'Gender',
      'Test Name',
      'Timing',
      'Phone',
      'Email',
      'Booking Date'
    ]
    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...bookings])
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Bookings')
    XLSX.writeFile(workbook, EXCEL_FILE_PATH)
    console.log('Booking saved to Excel file')
  } catch (error) {
    console.error('Error writing to Excel file:', error)
    throw error
  }
}

// API Routes
app.post('/api/bookings', (req, res) => {
  try {
    const bookingData = req.body
    
    // Validate required fields
    const requiredFields = ['name', 'age', 'gender', 'testName', 'timing']
    for (const field of requiredFields) {
      if (!bookingData[field]) {
        return res.status(400).json({ error: `${field} is required` })
      }
    }

    // Read existing bookings
    const existingBookings = readBookings()
    
    // Create new booking row
    const newBooking = [
      bookingData.bookingId,
      bookingData.name,
      bookingData.age,
      bookingData.gender,
      bookingData.testName,
      bookingData.timing,
      bookingData.phone || '',
      bookingData.email || '',
      new Date(bookingData.bookingDate).toLocaleString()
    ]
    
    // Add to existing bookings
    const allBookings = [...existingBookings, newBooking]
    
    // Write to Excel file
    writeBookings(allBookings)
    
    res.status(200).json({ 
      success: true, 
      message: 'Booking saved successfully',
      bookingId: bookingData.bookingId
    })
    
  } catch (error) {
    console.error('Error saving booking:', error)
    res.status(500).json({ error: 'Failed to save booking' })
  }
})

// Get all bookings
app.get('/api/bookings', (req, res) => {
  try {
    const bookings = readBookings()
    res.status(200).json({ bookings })
  } catch (error) {
    console.error('Error reading bookings:', error)
    res.status(500).json({ error: 'Failed to read bookings' })
  }
})

// Initialize Excel file on server start
initializeExcelFile()

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`Excel file location: ${EXCEL_FILE_PATH}`)
}) 