import React from "react";
import { Link } from "react-router-dom";
import { PaginationProps } from "./interface";

// first, ..., prev, current, next, ..., last
const MINIMAL_PAGE_ITEM_COUNT = 5;

/**
 * Generate numeric page items around current page.
 *   - Always include first and last page
 *   - Add ellipsis if needed
 */
function generatePageItems(total: number, current: number, width: number) {
  if (width < MINIMAL_PAGE_ITEM_COUNT) {
    throw new Error(`Must allow at least ${MINIMAL_PAGE_ITEM_COUNT} page items`);
  }
  if (width % 2 === 0) {
    throw new Error(`Must allow odd number of page items`);
  }
  if (total < width) {
      let arr:number[] = [];
      for(let i:number = 0; i < total; i++) {
          arr = [...arr,i]
      }
    // return [...new Array(total).keys()];
    return arr;
  }
  const left = Math.max(0, Math.min(total - width, current - Math.floor(width / 2)));
  const items: (string | number)[] = new Array(width);
  for (let i = 0; i < width; i += 1) {
    items[i] = i + left;
  }
  // replace non-ending items with placeholders
  if (items[0] > 0) {
    items[0] = 0;
    items[1] = 'prev-more';
  }
  if (items[items.length - 1] < total - 1) {
    items[items.length - 1] = total - 1;
    items[items.length - 2] = 'next-more';
  }
  return items;
}

export default React.forwardRef(function Pagination(
    { pageCount, currentPage = 0, maxPageItemCount = 7, gotoPage,url,keySearch }: PaginationProps,
    ref: React.Ref<HTMLDivElement>,
  ) {
    const pageItems = generatePageItems(pageCount, currentPage, maxPageItemCount);
    console.log(pageItems);
    
    return (
      <div ref={ref} className="dt-pagination d-flex align-items-center justify-content-center mt-2">
          
        <ul className="pagination pagination-sm mb-0">
                <li className={'page-item ' + (currentPage < 1 ? 'disabled' : '' ) }>
                <Link className="page-link"  to={url + (currentPage) + (keySearch)}>
                    Previous
                </Link>
                </li>
          {pageItems.map((item, i) =>
            typeof item === 'number' ? (
              // actual page number
              <li key={item} className={"page-item " + (currentPage === item ? 'active' : "")}>
                <Link
                  className="page-link"
                  to={url + (item + 1) +  (keySearch)}
                  role="button"
                >
                  {item + 1}
                </Link>
              </li>
            ) : (
              <li key={item} className="dt-pagination-ellipsis">
                <span>…</span>
              </li>
            ),
          )}
           <li className={'page-item ' + (currentPage === pageCount - 1 ? 'disabled' : '' ) }>
          <Link className="page-link" to={url + (currentPage + 2) +  (keySearch)}>
            Next
          </Link>
        </li>
        </ul>
      </div>
    );
  });