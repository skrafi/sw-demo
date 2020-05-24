import * as React from 'react';
import { Page, PaginationWrapper } from './PaginationStyle';
import { Button } from '../Button/Button';

const RESULTS_PER_PAGE = 10;

const initPages = (nr: number) => {
    const result = [];
    for (let i = 1; i <= nr; i++) {
        result.push(i);
    }
    return result;
};

export const Pagination = ({ handleClick, count, currentPage }: Props) => {
    const nrOfPages = Math.ceil(count / RESULTS_PER_PAGE);
    const pages = initPages(nrOfPages);
    const nextPage = () => {
        if (currentPage < nrOfPages) {
            handleClick(++currentPage);
        }
    };
    const prevPage = () => {
        if (currentPage > 1) {
            handleClick(--currentPage);
        }
    };
    return (
        <PaginationWrapper>
            <Button text="Prev" onClick={prevPage} />
            {pages.map((elem) => (
                <Page key={elem} onClick={() => handleClick(elem)} active={currentPage === elem}>
                    {elem}
                </Page>
            ))}
            <Button text="Next" onClick={nextPage} />
        </PaginationWrapper>
    );
};

interface Props {
    handleClick: (page: number) => void;
    count: number;
    currentPage: number;
}
