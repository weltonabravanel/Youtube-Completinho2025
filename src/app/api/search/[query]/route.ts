import { youtubeAPIExeptionResponse } from '@/lib/exeptions/youtube-api-exeption-response'
import { youtubeClient } from '@/lib/googleapis/youtube-client'
import { NextRequest, NextResponse } from 'next/server'
export const revalidate = 60 * 60 * 6
export const dynamic = 'force-dynamic'

type Params = {
	params: {
		query: string
	}
}

export const GET = async (req: NextRequest, { params }: Params) => {
	const { query } = params

	if (!query) {
		return new NextResponse('Invalid search query.', {
			status: 400,
		})
	}

	try {
		const res = await youtubeClient.search.list({
			part: ['snippet'],
			maxResults: 50,
			q: query,
			type: ['video'],
		})

		return NextResponse.json(res.data)
	} catch (error) {
		return youtubeAPIExeptionResponse(error)
	}
}
