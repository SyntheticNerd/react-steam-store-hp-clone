import ArrowBtnLg from "./ArrowBtnLg";
import { PaginatorCont, PageTracker } from "./StyledComponents";

export default function Paginator({ children }) {
  return (
    <>
    <PaginatorCont>
      <ArrowBtnLg />
      {children}
      <ArrowBtnLg direction='right' />
    </PaginatorCont>
    <PageTracker>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
    </PageTracker>
    </>
  );
}
