interface SealProps {
  size?: number
}

export default function Seal({ size = 44 }: SealProps) {
  return (
    <span className="cp-seal" style={{ width: size, height: size }}>
      CP
    </span>
  )
}
