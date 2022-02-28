type Props = {
  action: () => void,
  btnText: any,
  type: string,
}

function CustomButton({ action, btnText, type }: Props) {
  return (
    <button
      id={type}
      onClick={action}
      type="submit"
      aria-label={`${btnText} action button`}
    >
      {btnText}
    </button>
  )
}

export default CustomButton
