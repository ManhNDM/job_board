export interface PaginationProps {
    pageCount: number; // number of pages
    currentPage?: number; // index of current page, zero-based
    maxPageItemCount?: number;
    ellipsis?: string; // content for ellipsis item
    gotoPage?: (page: number) => void; // `page` is zero-based
    url:string;
    keySearch?:string;
  }