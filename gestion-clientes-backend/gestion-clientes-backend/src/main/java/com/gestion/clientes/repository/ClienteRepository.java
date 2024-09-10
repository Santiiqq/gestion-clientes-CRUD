package com.gestion.clientes.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gestion.clientes.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente,Long> {

}
