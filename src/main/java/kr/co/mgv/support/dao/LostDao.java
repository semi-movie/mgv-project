package kr.co.mgv.support.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import kr.co.mgv.support.vo.Lost;
import kr.co.mgv.theater.vo.Location;
import kr.co.mgv.theater.vo.Theater;

@Mapper
public interface LostDao {

	// 분실물문의 등록
	void insertLost(Lost lost);
	
	// 분실장소에서 지역, 극장 가져오기
	List<Theater> getTheatersByLocationNo(int locationNo);
	List<Location> getLocations();
	
	// 분실물문의 리스트 조회
	List<Lost> getlosts(Map<String, Object> param);
	int getTotalRows(Map<String, Object> param);
	
	// 분실물문의 디테일 조회
	Lost getLostByNo (int lostNo);
}
