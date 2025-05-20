package com.repatikosam.ERP.Repository;

import com.repatikosam.ERP.model.TeacherDetails;
import com.repatikosam.ERP.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface TeacherDetailsRepository extends JpaRepository<TeacherDetails, Long> {
    TeacherDetails findByTeacherId(String teacherId);
    Optional<TeacherDetails> findByTeacherIdAndPassword(String teacherId, String password); // For direct credential check
}