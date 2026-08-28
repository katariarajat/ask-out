# Coffee Invitation Website ☕

A fun, interactive multi-page quiz website to ask someone out with email notifications for every response!

## Features

- **4-page interactive quiz** with beautiful animations
- **Page 1**: "I have something important to tell you..." - Mystery and intrigue
- **Page 2**: "Do you want to hear a joke?" - Interactive jokes with "Next joke" button (includes doctor joke)
- **Page 3**: "What's your biggest dream?" - Inspiring question about life goals
- **Page 4**: Inspirational quote about self-belief - Positive and uplifting
- **Email notifications** for every answer she gives
- **Beautiful gradients** and animations on each page
- **Responsive design** for mobile devices
- **Final message**: Focuses on making her feel special and destined for success (rokra) + request for smiling photo

## Quiz Flow

1. **Welcome Page** → "Let's Go!" button
2. **Question 1**: I have something important to tell you...
   - "I'm listening..." → Goes to Q2
   - "Tell me now! I'm excited!" → Goes to Q2
   - "You've got my attention..." → Goes to Q2
   - "I don't care" → BLOCKED with message
3. **Question 2**: Do you want to hear a joke?
   - "Yes, tell me a joke!" → Shows joke with "Next joke" and "Skip" buttons
   - "No thanks, I'm good" → Goes to Q3
   - Jokes include: atom joke, eyebrows joke, scarecrow joke, doctor joke
4. **Question 3**: What's your biggest dream?
   - "Become incredibly successful and wealthy" → Goes to Q4
   - "Travel the world and explore new places" → Goes to Q4
   - "Make a positive impact on people's lives" → Goes to Q4
   - "Find true happiness and inner peace" → Goes to Q4
5. **Question 4**: Inspirational quote about self-belief
   - "I feel inspired!" → Celebration + Email notification
   - "That made me smile" → Celebration + Email notification
   - Final message: "You are destined for greatness, Tulsi" + rokra success message + request for smiling photo

## Setup Instructions

### 1. Get Resend API Key (Free)

1. Go to [resend.com](https://resend.com/)
2. Sign up for a free account
3. Go to API Keys section and create a new API key
4. Copy the API key

### 2. Configure Environment Variables

Create a `.env` file:
```bash
RESEND_API_KEY=your_resend_api_key_here
YOUR_EMAIL=your_email@example.com
```

### 3. Deploy to Vercel

1. Push this code to your GitHub repository
2. Go to [vercel.com](https://vercel.com/)
3. Click "Add New Project"
4. Import your GitHub repository
5. Add environment variables:
   - `RESEND_API_KEY`: Your Resend API key
   - `YOUR_EMAIL`: Your email address (to receive notifications)
6. Click "Deploy"

### 4. Test It

Once deployed, share the Vercel URL with her. You'll receive email notifications for:
- Every answer she gives to each question
- When she tries to click "No" on the final question
- When she finally accepts!

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Add your API keys to `.env`

4. Run locally:
```bash
python -m http.server 8000
```

## Email Notifications

You'll receive emails with:
- Question number and text
- Her answer
- Timestamp
- Special messages for key responses (acceptance, date requests, etc.)

## Customization

- **Change questions**: Edit `page1.html`, `page2.html`, `page3.html`, `page4.html`
- **Modify jokes**: Edit the `jokes` array in `page2.html`
- **Change "No" messages**: Edit the `noMessages` array in `page4.html`
- **Modify colors**: Update CSS gradients in each page
- **Add more questions**: Create additional page files

Good luck! ☕✨
