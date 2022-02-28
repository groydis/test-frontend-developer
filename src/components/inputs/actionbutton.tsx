type Props = {
  action: () => void,
  btnText: any,
  type: string,
}

function ActionButton({ action, btnText, type }: Props) {
  return (
    <button
      id={type}
      onClick={action}
      type="submit"
      aria-label="action button"
    >
      {btnText}
    </button>
  )
}

export default ActionButton
