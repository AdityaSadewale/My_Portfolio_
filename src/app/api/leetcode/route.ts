import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Switching to a more reliable LeetCode API provider
    const response = await fetch('https://leetcode-api-faisalshohag.vercel.app/Aditya_Sadewale_', {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch LeetCode data from provider' }, { status: response.status });
    }

    const rawData = await response.json();
    
    // Normalize the data to match what the frontend expects
    // The previous API had a 'status' field and different field names for solved counts
    const totalSubmissions = rawData.totalSubmissions?.find((s: any) => s.difficulty === 'All');
    const acceptanceRate = totalSubmissions && totalSubmissions.submissions > 0 
      ? ((rawData.matchedUserStats?.acSubmissionNum?.find((s: any) => s.difficulty === 'All')?.submissions || 0) / totalSubmissions.submissions * 100).toFixed(1)
      : "0";

    const normalizedData = {
      status: "success",
      totalSolved: rawData.totalSolved || 0,
      ranking: rawData.ranking || 0,
      acceptanceRate: acceptanceRate,
      easySolved: rawData.easySolved || 0,
      mediumSolved: rawData.mediumSolved || 0,
      hardSolved: rawData.hardSolved || 0,
      // Include raw data just in case
      source: "faisalshohag-api"
    };

    return NextResponse.json(normalizedData);
  } catch (error) {
    console.error('LeetCode proxy error:', error);
    return NextResponse.json({ error: 'Internal Server Error', message: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}

