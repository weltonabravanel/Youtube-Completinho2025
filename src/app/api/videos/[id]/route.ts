import { youtubeAPIExeptionResponse } from '@/lib/exeptions/youtube-api-exeption-response'
import { youtubeClient } from '@/lib/googleapis/youtube-client'
import { NextRequest, NextResponse } from 'next/server'
export const revalidate = 60 * 60 * 24
export const dynamic = 'force-dynamic'

type Params = {
	params: {
		id: string
	}
}

export const GET = async (req: NextRequest, { params }: Params) => {
	const { id } = params

	try {
		const res = await youtubeClient.videos.list({
			part: ['snippet, contentDetails, statistics'],
			id: [id],
		})

		return NextResponse.json(res.data)
	} catch (error) {
		return youtubeAPIExeptionResponse(error)
	}
}
