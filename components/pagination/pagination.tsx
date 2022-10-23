interface IPagination {
  pageNum: number;
  pageFunc: Function;
}

const Pagination = ({ pageNum, pageFunc }: IPagination) => {
  const decreasePage = () => {
    if (pageNum > 1) {
      pageFunc(pageNum - 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  const increasePage = () => {
    pageFunc(pageNum + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="pagination">
      <span className="pagination--clickable" onClick={() => decreasePage()}>
        {"<"}
      </span>
      <span className="pagination--number">{pageNum}</span>
      <span className="pagination--clickable" onClick={() => increasePage()}>
        {">"}
      </span>
    </div>
  );
};

export default Pagination;
