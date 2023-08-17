package kr.co.mgv.board.vo;

import kr.co.mgv.user.vo.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class TboardReport {

	private int no;
	private String reasonContent; // 신고이유 내용
	private ReportReason reason;
	private TheaterBoard board;
	private User user;
	
	@Builder
	public TboardReport(int no, String reasonContent, ReportReason reason, TheaterBoard board, User user) {
		super();
		this.no = no;
		this.reasonContent = reasonContent;
		this.reason = reason;
		this.board = board;
		this.user = user;
	}
}
