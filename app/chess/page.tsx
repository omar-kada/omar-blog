import { ChessBoard } from '@/components/chess/ChessBoard'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Chess' })

export default function Page() {
  return (
    <div>
      <ChessBoard />
    </div>
  )
}
