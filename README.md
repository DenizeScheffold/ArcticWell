**To visit the website: https://arcticwell-4.vercel.app/**

Note: this project is designed to be displayed in 376x736, but should look fine on lower resolutions too. On higher resolutions, the app will be displayed in a 376x736 box.

To see code related to project, please go to next-project/arctic-well. New developing branch for each sprint, see related week to get to know 
the code we work on as for today. Every friday (releaseday after sprint) the dev branch is merged to main, which also updates the app on Vercel.

Because of this, the latest dev changes may not be reflected on Vercel.

---

**To run this project locally:**
1. Clone the repo
2. Navigate to ArcticWell/next-project/arctic-well and install the required dependencies through npm ("npm install")
3. Create an .env.local file in the same directory as .env.local.example
4. Copy the contents of .env.local.example into your newly created .env.local file
5. Enter your Google Maps API key into the NEXT_PUBLIC_GOOGLE_MAPS_API_KEY field of .env.local
6. Run "npm run dev" in the same directory you ran "npm install" in step 2
7. Open localhost:3000 in your web browser of choice

If you don't have an API key the app, with the exception of the Map page and its associated features, is still fully functional.
