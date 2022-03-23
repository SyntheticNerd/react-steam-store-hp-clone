import { ArrowBtnCont } from "./StyledComponents";

export default function ArrowBtnLg({ direction, onClick }) {
  let arrowDir = direction === "right" ? { transform: "rotate(180deg)" } : {};
  return (
    <ArrowBtnCont style={arrowDir} onClick={onClick}>
      <svg
        width='8'
        height='13'
        viewBox='0 0 8 13'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        transform="rotate(180) scale(2)"
      >
        <path
          d='M1.58121 12.7508C1.409 12.9121 1.18982 13 0.931507 13C0.414873 13 0 12.6189 0 12.1353C0 11.8935 0.10959 11.6736 0.289629 11.5051L5.76908 6.49267L0.289629 1.49493C0.10959 1.32638 0 1.09921 0 0.864713C0 0.38106 0.414873 0 0.931507 0C1.18982 0 1.409 0.0879369 1.58121 0.249154L7.67123 5.81849C7.89041 6.00902 7.99217 6.24352 8 6.5C8 6.75648 7.89041 6.97632 7.67123 7.17418L1.58121 12.7508Z'
          fill='white'
        />
      </svg>
    </ArrowBtnCont>
  );
}
