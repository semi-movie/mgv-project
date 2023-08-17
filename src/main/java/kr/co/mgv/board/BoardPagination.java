package kr.co.mgv.board;


import java.util.stream.IntStream;

import lombok.Getter;

@Getter
public class BoardPagination {

	private int rows = 10;
	private int pages = 5;
	private int page;
	private int totalRows;
	private int totalPages;
	private int totalBlocks;
	private int currentBlock;
	private int beginPage;
	private int endPage;
	private boolean isFirst;
	private boolean isLast;
	private int prePage;
	private int nextPage;
	private int begin;
	private int end;
	private int[] pageNumbers;
	

	public BoardPagination(int page, int totalRows) {
		super();
		this.page = page;
		this.totalRows = totalRows;
	}

	
	public BoardPagination(int rows, int page, int totalRows) {
		this.rows = rows;
		this.page = page;
		this.totalRows = totalRows;
		
		init();
	}
	
	
	
	private void init() {
		totalPages = (int) Math.ceil((double) totalRows/rows);
		totalBlocks = (int) Math.ceil((double) totalPages/pages);
		currentBlock = (int) Math.ceil((double) page/pages);
		beginPage = (currentBlock - 1)*pages + 1;
		endPage = currentBlock*pages;
		if (currentBlock == totalBlocks) {
			endPage = totalPages;
		}
		isFirst = page == 1;
		isLast = page == totalPages;
		prePage = page - 1;
		nextPage = page + 1;
		begin = (page - 1)*rows + 1;
		end = page*rows;
		pageNumbers = IntStream.range(beginPage, endPage+1).toArray();
	}






}
