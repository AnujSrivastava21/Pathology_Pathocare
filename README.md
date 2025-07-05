# JAS Diagnosis - Pathology Lab Website

A modern, responsive pathology laboratory website with booking system and Excel data management.

## Features

- **Modern UI/UX**: Clean design with Tailwind CSS and Framer Motion animations
- **Booking System**: Complete appointment booking with form validation
- **Excel Integration**: All bookings stored in a single Excel file
- **Responsive Design**: Works perfectly on all devices
- **Professional Branding**: JAS Diagnosis branding throughout

## Setup Instructions

### 1. Frontend Setup (React)

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will run on `http://localhost:5174`

### 2. Backend Setup (Express Server)

```bash
# Install server dependencies
npm install express cors xlsx nodemon

# Or copy package-server.json and run:
cp package-server.json package.json
npm install

# Start the server
node server.js
```

The backend will run on `http://localhost:3001`

### 3. Excel File Management

- The server automatically creates `bookings.xlsx` in the root directory
- All bookings are stored in a single Excel file with the following columns:
  - Booking ID
  - Name
  - Age
  - Gender
  - Test Name
  - Timing
  - Phone
  - Email
  - Booking Date

## Booking System Features

### Form Fields
- **Name**: Full name (required)
- **Age**: Numeric age (required, 1-120)
- **Gender**: Dropdown (Male/Female/Other)
- **Test Name**: Dropdown with all available tests
- **Timing**: Hourly slots from 9 AM to 6 PM
- **Phone**: Optional contact number
- **Email**: Optional email address

### Available Tests
- Blood Pressure Check
- Urine Analysis
- Blood Sugar Test
- Thyroid Function Test
- Complete Blood Count
- Lipid Profile
- Liver Function Test
- Kidney Function Test

### Booking Flow
1. User clicks "Book Your Test Now" or "Book Now" on any service
2. Modal opens with pre-filled test name (if from services page)
3. User fills required information
4. Form validates all required fields
5. Data is sent to backend and stored in Excel
6. Success confirmation is shown
7. Modal closes automatically after 2 seconds

## API Endpoints

- `POST /api/bookings` - Create new booking
- `GET /api/bookings` - Get all bookings

## File Structure

```
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── BookingModal.jsx    # Booking form modal
│   │   └── common/
│   │       ├── Header.jsx          # Navigation header
│   │       └── Footer.jsx          # Site footer
│   ├── pages/
│   │   ├── Home.jsx               # Landing page with carousel
│   │   ├── Services.jsx           # Services listing
│   │   ├── About.jsx              # About page with team
│   │   ├── Contact.jsx            # Contact form
│   │   └── ...
│   └── ...
├── server.js                      # Express backend server
├── bookings.xlsx                  # Excel file (auto-created)
└── package.json
```

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS, Framer Motion
- **Backend**: Express.js, Node.js
- **Data Storage**: Excel files (xlsx library)
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Notes

- The Excel file is created automatically when the server starts
- All bookings are appended to the same file
- The system generates unique booking IDs
- Form validation ensures data integrity
- Responsive design works on all screen sizes
