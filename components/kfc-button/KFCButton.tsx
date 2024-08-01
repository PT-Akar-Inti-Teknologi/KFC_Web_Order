import React from 'react'

type KFCButtonProps = {
    variant?: "primary"
    label?: string
}
export default function KFCButton(props: KFCButtonProps) {
  return (
    <div>
        <p>label: {props.label}</p>
        <p>KFCButton {props.variant}</p>
    </div>
  )
}
