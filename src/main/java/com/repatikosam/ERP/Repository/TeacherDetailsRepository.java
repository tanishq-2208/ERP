package com.repatikosam.ERP.Repository;

import com.repatikosam.ERP.auth.entity.TeacherDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherDetailsRepository extends JpaRepository<TeacherDetails, Long> {
    // You can add custom query methods here if needed
    TeacherDetails findByTeacherId(String teacherId);
}