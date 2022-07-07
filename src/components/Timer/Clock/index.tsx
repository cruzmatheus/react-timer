import style from './Timer.module.scss'

interface Props {
  time?: number
}

export default function Clock({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  const [m1, m2] = String(minutes).padStart(2, '0')
  const [s1, s2] = String(seconds).padStart(2, '0')

  return (
    <>
      <span className={style.relogioNumero}>{m1}</span>
      <span className={style.relogioNumero}>{m2}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{s1}</span>
      <span className={style.relogioNumero}>{s2}</span>
    </>
  )
}