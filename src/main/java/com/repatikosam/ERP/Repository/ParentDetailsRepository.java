package com.repatikosam.ERP.Repository;

import com.repatikosam.ERP.model.ParentDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParentDetailsRepository extends JpaRepository<ParentDetails, Long> {
    ParentDetails findByStudentId(String studentId);
}