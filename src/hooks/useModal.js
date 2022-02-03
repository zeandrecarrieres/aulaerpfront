import { useState } from "react";

export function useModal() {

  const [isModalOpen, setModalOpen] = useState()

  function openModal() {
    setModalOpen(true)
  }

  function closeModal() {
    setModalOpen(false)
  }

  return {
    openModal,
    closeModal,
    isModalOpen
  }
}