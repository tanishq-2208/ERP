package com.repatikosam.ERP.Repository;

import com.repatikosam.ERP.model.AdminDetails;
import com.repatikosam.ERP.model.UserEntity;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminDetailsRepository extends JpaRepository<AdminDetails, Long> {

}