package com.repatikosam.ERP.Repository;

import com.repatikosam.ERP.model.TeacherDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherDetailsRepository extends JpaRepository<TeacherDetails, Long> {
    TeacherDetails findByTeacherId(String teacherId);
}