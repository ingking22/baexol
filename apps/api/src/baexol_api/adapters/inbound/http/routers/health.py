"""인바운드 어댑터 — 헬스체크 라우터."""

from __future__ import annotations

from fastapi import APIRouter

router = APIRouter(tags=["meta"])


@router.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "service": "baexol-api"}
