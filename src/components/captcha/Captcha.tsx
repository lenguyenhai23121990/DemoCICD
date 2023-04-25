import classNames from "classnames"
import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react"
import { CaptchaWrapper } from './Style'

export interface CaptchaRef {
    SetTouched: (val: any) => void,
}
interface State {
    MinLength: number
    MaxLength: number
    Placeholder: string
    InvalidMessage: string
    OnChange: (isValid: any) => void
    OnRefresh: () => void
}
type Props = State
const Captcha = forwardRef((props: Props, ref) => {
    // console.log(props)
    let canvas: HTMLCanvasElement | any
    const [solution, setSolution] = useState("")
    const [input, setInput] = useState("")
    const [touched, setTouched] = useState(false)
    useEffect(()=>{
        drawCaptcha()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const getRandomInt = (min: number, max: number) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min)) + min
    }
    const genetateCaptcha = (min: number, max: number) => {
        let len = getRandomInt(min, max)
        let text = ''
        for (let i = 0; i < len; i += 1) {
                switch (Math.floor(Math.random() * 3)) {
                case 0: text += String.fromCharCode(48 + Math.floor(Math.random() * 10)); break
                case 1: text += String.fromCharCode(65 + Math.floor(Math.random() * 26)); break
                case 2: text += String.fromCharCode(97 + Math.floor(Math.random() * 26)); break
                default: break
            }
        }
        return text
    }
    const handleChange = (e: any) => {
        setInput(e.target.value)
        props.OnChange(e.target.value === solution)
    }
    const refresh = () => {
        drawCaptcha()
        props.OnRefresh()
    }
    const playAudio = () => {
        const audio = new SpeechSynthesisUtterance(
            solution
            .toString()
            .split('')
            .join(' ')
        )
        audio.rate = 0.6
        window.speechSynthesis.speak(audio)
    }
    const drawCaptcha = () => {
        setInput("")
        setTouched(false)
        let _solution = genetateCaptcha(props.MinLength, props.MaxLength)
        _solution = getRandomInt(1048576, 16777215).toString(16); // length = 6 (HEX: 100000 -> FFFFFF)
        setSolution(_solution)
        const { width, height } = canvas
        const ctx: any = canvas.getContext('2d')
        ctx.clearRect(0, 0, width, height)
        
        // ctx.strokeStyle = 'green'
        // ctx.beginPath()
        // ctx.moveTo(getRandomInt(5, 20), getRandomInt(5, 20)); ctx.lineTo(width - getRandomInt(5, 20), height - getRandomInt(5, 20)); ctx.stroke()
        // ctx.moveTo(getRandomInt(15, 30), getRandomInt(15, 30)); ctx.lineTo(width - getRandomInt(15, 30), height - getRandomInt(15, 30)); ctx.stroke()
        // ctx.closePath()
        
        // ctx.beginPath()
        // ctx.moveTo(getRandomInt(5, 20), height - getRandomInt(5, 20)); ctx.lineTo(width - getRandomInt(5, 20), getRandomInt(5, 20)); ctx.stroke()
        // ctx.moveTo(getRandomInt(15, 30), height - getRandomInt(15, 30)); ctx.lineTo(width - getRandomInt(15, 30), getRandomInt(15, 30)); ctx.stroke()
        // ctx.moveTo(getRandomInt(width / 10, (width / 10) + 10), height - getRandomInt(15, 30)); ctx.lineTo(getRandomInt(width / 2, width / 2 + 10), getRandomInt(5, 20)); ctx.stroke()
        // ctx.closePath()

        ctx.font = `bold ${getRandomInt(20, 35)}px Verdana`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(_solution, width / 2, height / 2 + 3)
        // ctx.strokeStyle = "black"
        // ctx.strokeText(_solution, width / 2, height / 2 + 3)

        const color = getRandomInt(1,100)
        const x = getRandomInt(0, 3)
        const y = getRandomInt(0, 3)
        const r = getRandomInt(3,5)
        const d = r + 1.5
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 25; j++) {
                ctx.strokeStyle = "rgb(0, " + Math.floor(255 - color * i) + ", " + Math.floor(255 - color * j) + ")";
                ctx.beginPath();
                ctx.arc(x + d + j * d * 2, y + d + i * d * 2, r, 0, Math.PI * 2, true);
                ctx.stroke();
            }
        }
    }
    useImperativeHandle(ref, () => ({
        SetTouched(val: any) {
            setTouched(val)
        }
    }))
    return (
        <CaptchaWrapper style={{display: 'flex', justifyContent: 'flex-end'}}>
            <div className="cap p-mb-1 mt-3">
                <div className="cap-row">
                    <canvas ref={(el) => { canvas = el }} width={200} height={50} className="cap-canvas" data-testid="captcha-canvas" />
                    <div className="cap-column">
                        <button type="button" aria-label="new captcha" onClick={refresh} className="cap-button" data-testid="captcha-refresh" tabIndex={-1}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g data-name="Layer 2">
                                    <g data-name="refresh">
                                        <rect width="24" height="24" opacity="0" />
                                        <path d="M20.3 13.43a1 1 0 0 0-1.25.65A7.14 7.14 0 0 1 12.18 19 7.1 7.1 0 0 1 5 12a7.1 7.1 0 0 1 7.18-7 7.26 7.26 0 0 1 4.65 1.67l-2.17-.36a1 1 0 0 0-1.15.83 1 1 0 0 0 .83 1.15l4.24.7h.17a1 1 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.09-.11c0-.05.09-.09.13-.15s0-.1.05-.14a1.34 1.34 0 0 0 .07-.18l.75-4a1 1 0 0 0-2-.38l-.27 1.45A9.21 9.21 0 0 0 12.18 3 9.1 9.1 0 0 0 3 12a9.1 9.1 0 0 0 9.18 9A9.12 9.12 0 0 0 21 14.68a1 1 0 0 0-.7-1.25z" />
                                    </g>
                                </g>
                            </svg>
                        </button>
                        <button type="button" aria-label="play audio" onClick={playAudio} className="cap-button" data-testid="captcha-audio" tabIndex={-1}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g data-name="Layer 2">
                                    <g data-name="volume-up">
                                        <rect width="24" height="24" opacity="0" />
                                        <path d="M18.28 8.37a1 1 0 1 0-1.56 1.26 4 4 0 0 1 0 4.74A1 1 0 0 0 17.5 16a1 1 0 0 0 .78-.37 6 6 0 0 0 0-7.26z" />
                                        <path d="M19.64 5.23a1 1 0 1 0-1.28 1.54A6.8 6.8 0 0 1 21 12a6.8 6.8 0 0 1-2.64 5.23 1 1 0 0 0-.13 1.41A1 1 0 0 0 19 19a1 1 0 0 0 .64-.23A8.75 8.75 0 0 0 23 12a8.75 8.75 0 0 0-3.36-6.77z" />
                                        <path d="M15 3.12a1 1 0 0 0-1 0L7.52 7.57h-5a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4a1.06 1.06 0 0 0 .57.17 1 1 0 0 0 1-1V4a1 1 0 0 0-.5-.88zm-1.47 15L8.4 14.6a1 1 0 0 0-.57-.17H3.5V9.57h4.33a1 1 0 0 0 .57-.17l5.1-3.5z" />
                                    </g>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
                <input value={input} onChange={handleChange} onBlur={() => setTouched(true)} placeholder={props.Placeholder} className={classNames("cap-input",{'cap-input-invalid': touched && input !== solution})} data-testid="captcha-input" />
                {<label className="cap-label-invalid">{touched && input !== solution?props.InvalidMessage : <span>&nbsp;</span>}</label>}
            </div>
        </CaptchaWrapper>
    )
})
export default Captcha
